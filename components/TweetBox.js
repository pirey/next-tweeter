import { Editor, EditorState, convertFromRaw } from "draft-js"
import { useState } from "react"
import Avatar from "./Avatar"
import LightButton from "./LightButton"
import Wrap from "./Wrap"

const assets = {
  svg: {
    topTweets: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
        </g>
      </svg>
    ),
    earth: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z"></path>
        </g>
      </svg>
    ),
    media: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
          <circle cx="8.868" cy="8.309" r="1.542"></circle>
        </g>
      </svg>
    ),
    gif: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path>
          <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path>
        </g>
      </svg>
    ),
    poll: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path>
        </g>
      </svg>
    ),
    emoji: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
          <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path>
          <circle cx="14.738" cy="9.458" r="1.478"></circle>
          <circle cx="9.262" cy="9.458" r="1.478"></circle>
        </g>
      </svg>
    ),
    schedule: (
      <svg viewBox="0 0 24 24" className="flex-shrink-0 w-5 fill-current">
        <g>
          <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path>
          <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"></path>
          <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path>
          <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path>
        </g>
      </svg>
    ),
  },
}

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 cursor-pointer">
      <div className="text-xl font-black">Home</div>
      <div className="">
        <LightButton title="Top Tweets">{assets.svg.topTweets}</LightButton>
      </div>
    </div>
  )
}

function Footer() {
  return <div className="h-3 bg-gray-100 border border-gray-200"></div>
}

function ToolbarButton(props) {
  return <LightButton {...props} />
}

function PrivacyOption() {
  return (
    <div className="pb-2 border-b border-gray-200">
      <div className="inline-flex items-center px-1 py-1 text-xs font-bold text-blue-400 rounded-full cursor-pointer hover:bg-blue-100">
        {assets.svg.earth}
        <span className="ml-2">Everyone can reply</span>
      </div>
    </div>
  )
}

function Toolbar({ children }) {
  return <div className="flex">{children}</div>
}

function Bottom({ children }) {
  return (
    <div className="flex items-center justify-between py-3">{children}</div>
  )
}

function TweetButton({ disabled }) {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none disabled:opacity-50 disabled:bg-blue-400 disabled:cursor-default"
      disabled={disabled}
    >
      Tweet
    </button>
  )
}

function TweetEditor({ onFocus, ...editorProps }) {
  return (
    <div
      onClick={onFocus}
      className="w-full my-4 text-lg text-gray-800 focus:outline-none focus:border-transparent"
    >
      <Editor editorKey="tweetbox" {...editorProps} />
    </div>
  )
}

function TweetBox() {
  const [hasText, setHasText] = useState(false)
  const [focused, setFocused] = useState(false)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      convertFromRaw({
        entityMap: {},
        blocks: [
          {
            text: "",
            key: "foo",
            type: "unstyled",
            entityRanges: [],
          },
        ],
      })
    )
  )
  const handleChange = (editorState) => {
    setHasText(editorState.getCurrentContent().hasText())
    setEditorState(editorState)
  }
  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className="">
      <Header />
      <Wrap>
        <Avatar />
        <div className="flex flex-col flex-1">
          <TweetEditor
            placeholder="What's happening?"
            editorState={editorState}
            onChange={handleChange}
            onFocus={handleFocus}
          />

          {focused ? <PrivacyOption /> : null}

          <Bottom>
            <Toolbar>
              <ToolbarButton title="Media">{assets.svg.media}</ToolbarButton>
              <ToolbarButton title="Gif">{assets.svg.gif}</ToolbarButton>
              <ToolbarButton title="Poll">{assets.svg.poll}</ToolbarButton>
              <ToolbarButton title="Emoji">{assets.svg.emoji}</ToolbarButton>
              <ToolbarButton title="Schedule">
                {assets.svg.schedule}
              </ToolbarButton>
            </Toolbar>

            <TweetButton disabled={!hasText} />
          </Bottom>
        </div>
      </Wrap>
      <Footer />
    </div>
  )
}

export default TweetBox
