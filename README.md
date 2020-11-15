# react-map-brazil

Accessible Brazil map component for React.JS

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save react-map-brazil

## Examples

Example of district selection and standard style:

```jsx
import React from 'react'
function App () {
  const [distritc, setDistrict] = useState('')
  return (
    <div className='App'>
      <MapBrazil onChange={setDistrict} />
      <p>The selected district was {distritc}</p>
    </div>
  )
}
```

Customize the background color, selection color and map outline:

```jsx
import React from 'react'
function App () {
  return (
    <div className='App'>
      <MapBrazil bg='#6edbdb' fill='#000' colorStroke='red' />
    </div>
  )
}
```

You can also pass a style to the district label:

```jsx
import React from 'react'
function App () {
  return (
    <div className='App'>
      <MapBrazil colorLabel='red' />
    </div>
  )
}
```
