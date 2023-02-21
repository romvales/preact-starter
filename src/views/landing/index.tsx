import { FunctionComponent } from 'preact'
import { Markdown } from '@/components/elements'


import data from '@/contents/fruits.json'
import message from '@/contents/md/message.md'

export const landing_route: FunctionComponent<any> = props => {
  const { fruits } = data

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name (Quantity)</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { fruits.map(fruit => <>
          <tr>
            <td>{fruit.id}</td>
            <td>{fruit.name}</td>
            <td>{fruit.price}</td>
          </tr>
          </>) }
        </tbody>
      </table>
      <Markdown content={message}></Markdown>
    </>
  )
}

