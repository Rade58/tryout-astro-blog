import type {FunctionComponent} from 'preact'
import {h} from 'preact'
import {useState} from 'preact/hooks'

const Greeting: FunctionComponent<{messages: string[]}> = ({messages}) => {

  const randomMessage =() => messages[Math.floor(Math.random()*messages.length)]

  const [greeting, setGreeting] = useState<string>(randomMessage())

  return <div>
    <h3>{greeting}! Thank you for visiting!</h3>
    <button
      onClick={() => setGreeting(randomMessage())}
    >
      New Greeting
    </button>
  </div>;
}

export default Greeting;