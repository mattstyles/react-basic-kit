
import {
  Text, Markdown,
  H1, H2, H3, H4, H5, H6, P,
  TextBlock, Code, Pre, Blockquote,
  List, ListItem, Spacer,
  theme, Box
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components|Type',
  decorators: [addBase()]
}

const numericThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size === '0' || parseInt(size))
const aliasThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size !== '0' && !parseInt(size))

export const TextProps = () => {
  return (
    <>
      <H3>Sizes</H3>
      <P><Code>size</Code> property will set the font size and the line height and match the two from the theme scales which ensures that text component will match the underlying grid.</P>
      {
        numericThemeFontSizes.map(size => (
          <Text
            key={`fontSizes:${size}`}
            as='div'
            size={size}
          >
            {`Text Component: ${size}`}
          </Text>
        ))
      }
      <H3>Sizes</H3>
      <P><Code>fontSize</Code> and <Code>lineHeight</Code> are also exposed as properties and match their respective scales, giving more control.</P>
      <P>Some <Code>fontSize</Code> aliases are also exposed, which are particularly useful for UI control text.</P>
      <Box my={3}>
        {
          numericThemeFontSizes.map(size => (
            <Text
              key={`fontSizes:${size}`}
              mx={1}
              fontSize={size}
            >
              {size}
            </Text>
          ))
        }
      </Box>
      <Box my={3}>
        {
          aliasThemeFontSizes.map(alias => (
            <Text
              key={`fontSizes:${alias}`}
              mx={1}
              fontSize={alias}
            >
              {alias}
            </Text>
          ))
        }
      </Box>
      <H3>Other scales</H3>
      <H4>Letter spacing</H4>
      <Box my={3}>
        {
          Object.keys(theme.letterSpacings).map(kerning => (
            <Text
              key={kerning}
              display='block'
              fontSize='xl'
              lineHeight={8}
              letterSpacing={kerning}
            >
              {kerning}
            </Text>
          ))
        }
      </Box>
    </>
  )
}

TextProps.story = {
  name: 'Text'
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const ScaleChecks = () => {
  return (
    <>
      <H3>Font size, matched line height and line wrapping</H3>
      <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>
        size : fontSize : matchedLineHeight
      </Text>
      <Box>
        {
          numericThemeFontSizes.map(size => (
            <Box key={`map:${size}`}>
              <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>{
                `${size} : ${theme.fontSizes[size]} : ${theme.matchedLineHeights[size]}`
              }
              </Text>
              <Text
                as='div'
                size={size}
                mb={7}
              >
                {lorem}
              </Text>
            </Box>
          ))
        }
      </Box>
    </>
  )
}

const codeExample = `const pre = {
  component: 'Pre',
  detail: 'boxed by default'
}
`

export const Document = () => {
  return (
    <>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <P>Paragraph</P>
      <P>This has some <Code>code markup</Code> in it.</P>
      <P>A <Code box>code component</Code> can also style itself with a box.</P>
      <Pre>{codeExample}</Pre>
      <P>Elements like lists and <Code>Pre</Code> are hung by default to maintain vertical rhythm. Use <Code>inset</Code> to alter this behaviour</P>
      <Blockquote>This is a block quote. It too has an <Code>inset</Code> property.</Blockquote>
      <P>A list of things is hung by default.</P>
      <List>
        <ListItem>Hung by default</ListItem>
        <ListItem>It has an <Code>inset</Code> property if your really want</ListItem>
        <ListItem>Option C</ListItem>
        <ListItem>Option D</ListItem>
      </List>
      <List as='ol'>
        <ListItem>Option 1</ListItem>
        <ListItem>Option 2</ListItem>
      </List>
    </>
  )
}

export const WithTextBlock = () => {
  return (
    <>
      <Text display='block'>Standard block (no special heading treatment)</Text>
      <H1>This is a top-level heading</H1>
      <P>{lorem}</P>
      <H2>Another heading but this time an H2</H2>
      <P>{lorem}</P>
      <H3>Most documents only have three levels of heading, but there are more if you need them.</H3>
      <P>{lorem}</P>
      <P>{lorem}</P>
      <Spacer py={6} />
      <Text as='div' display='block'>With text block</Text>
      <TextBlock>
        <H1>This is a top-level heading</H1>
        <P>{lorem}</P>
        <H2>Another heading but this time an H2</H2>
        <P>{lorem}</P>
        <H3>Most documents only have three levels of heading, but there are more if you need them.</H3>
        <P>{lorem}</P>
        <P>{lorem}</P>
        <H4>This is another level of heading, down to 4 now</H4>
        <P>{lorem}</P>
        <H5>The 5th level down, this is pretty rare</H5>
        <P>{lorem}</P>
        <H6>The near mythical 6th level of heading in a document</H6>
        <P>{lorem}</P>
        <P>{lorem}</P>
        <H1>An H1 should not normally find its way in to text</H1>
        <H2>An h2 underneath an h1, which might happen</H2>
        <H3>Sequential is ok but might need manual adjusting</H3>
        <P>{lorem}</P>
      </TextBlock>
    </>
  )
}
WithTextBlock.story = {
  name: 'Text Block'
}

export const MarkdownStory = () => {
  return (
    <>
      <Markdown>Markdown is **supported**</Markdown>
      <Markdown>
        {`# Heading

Some text to display in a paragraph tag.
        `}
      </Markdown>
      <TextBlock>
        <Markdown>
          {`# Heading
## 2nd heading
Some text to display in a paragraph tag.`}
        </Markdown>
      </TextBlock>
      <Markdown>
        {`## Lists and code and stuff

The next section is a list:

* Option 1
* Option 2

How about _mucking_ with text a **little** more.

\`\`\`js
React-markdown outputs the contents of code blocks in
to the value prop rather than children.
CodeBlock only exists to push it into Pre children.
At small screen widths it’ll wrap like a normal text
node, but not at wider screens.
\`\`\`

However, some inline \`code\` should be straight forward
        `}
      </Markdown>
    </>
  )
}
MarkdownStory.story = {
  name: 'Markdown'
}
