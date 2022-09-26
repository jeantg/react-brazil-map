# react-brazil-map &middot; [![npm version](https://img.shields.io/badge/npm-v1.0.1-blue)](https://www.npmjs.com/package/react-brazil-map)

Accessible Brazil map component for React.JS

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save react-brazil-map

To install, you can use [yarn](https://https://yarnpkg.com/):

    $ yarn add react-brazil-map

## Examples

Example of district selection and default style:

```jsx
import React, { useState } from 'react'
import { MapBrazil } from 'react-brazil-map'

function App () {
  const [district, setDistrict] = useState('')
  return (
    <div className='App'>
      <MapBrazil onChange={setDistrict} />
      <p>The selected district was {district}</p>
    </div>
  )
}
```

Customize the background color, selection color and map outline:

```jsx
import React from 'react'
import { MapBrazil } from 'react-brazil-map'

function App () {
  return (
    <div className='App'>
      <MapBrazil bg='#6edbdb' fill='#000' colorStroke='red' />
    </div>
  )
}
```

You can also pass a style for the district title, width and height of the map:

```jsx
import React from 'react'
import { MapBrazil } from 'react-brazil-map'

function App () {
  return (
    <div className='App'>
      <MapBrazil colorLabel='red' width={500} height={500} />
    </div>
  )
}
```
