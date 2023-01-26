/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Text(props) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </>
  )
}
