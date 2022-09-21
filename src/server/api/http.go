package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/julienschmidt/httprouter"
	"github.com/rommms07/dogfetch"
)

var breeds = dogfetch.GetAll()

func main() {
	var R = httprouter.New()

	R.HandlerFunc(http.MethodGet, "/breeds", pipes)
	R.HandlerFunc(http.MethodGet, "/breeds/:id", pipes)

	http.ListenAndServe(os.Getenv("HTTP_ADDR"), R)
}

func pipes(rw http.ResponseWriter, req *http.Request) {
	rw.Header().Add("Content-Type", "application/json")

	params := httprouter.ParamsFromContext(req.Context())
	paramId := params.ByName("id")

	if paramId != "" {
		id(rw, req, paramId)
		return
	}

	all(rw, req)
}

func all(rw http.ResponseWriter, req *http.Request) {
	rw.Header().Add("Content-Type", "application/json")
	results := breeds

	P, _ := json.Marshal(results)
	rw.WriteHeader(200)
	rw.Write(P)
}

func id(rw http.ResponseWriter, req *http.Request, id string) {
	var breed *dogfetch.BreedInfo

	if result, ok := breeds[id]; !ok {
		rw.WriteHeader(404)
		rw.Write(itemNotFound(req.URL.Path))
		return
	} else {
		rw.WriteHeader(200)
		breed = result
	}

	P, _ := json.Marshal(breed)
	rw.Write(P)
}

func itemNotFound(path string) (p []byte) {
	p, _ = json.Marshal(map[string]any{
		"error":     "Resour Not found",
		"message":   fmt.Sprintf("Resource \"%s\" was not found.", path),
		"timestamp": time.Now().UnixMilli(),
	})

	return
}
