# RNDM Render Plugin: Animatable

## About

This plugin provides access to animatable components for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-animatable
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-animatable';
```

## Usage

The Animatable Plugin transforms the Components from the awesome [react-native-animatable](https://github.com/oblador/react-native-animatable) package into serialisable RNDM JSON responses.

Full documentation around the usage of these can be found on the react-native-animatable GitHub page.

### Components

The three components supported by this plugin are:

* View

```json
{
  "type": "animatable.View",
  "props": {
    "animation": "bounce",
    "iterationCount": 10,
    "style": {
      "width": 50,
      "height": 50,
      "backgroundColor": "red"
    }
  }
}
```

* Image

```json
{
  "type": "animatable.Image",
  "props": {
    "animation": "pulse",
    "iterationCount": "infinite",
    "source": {
      "uri": "https://firebasestorage.googleapis.com/v0/b/rndm-com.appspot.com/o/rndm_200.png?alt=media&token=ca705331-6963-4287-9687-bc526feb0226"
    },
    "style": {
      "width": 200,
      "height": 200
    }
  }
}

```

* Text

```json
{
  "type": "animatable.Text",
  "props": {
    "animation": "fadeInUpBig",
    "style": {
      "color": "cyan"
    }
  }
}

```

### Middleware

Although there is a host of predefined animations available, you are still able to create your own animation. This can be done by making use of the 'initializeRegistry' middleware.

**Example**

```json
{
  "type": "animatable.View",
  "props": {
    "animation": "myanim",
    "iterationCount": "infinite",
    "middleware": [{
      "middleware": "animatable.initializeRegistryWithDefinitions",
      "args": [{
        "myanim": {
          "0": {
            "opacity": 1,
            "scale": 1
          },
          "1": {
            "opacity": 0,
            "scale": 0
          },
          "0.5": {
            "opacity": 1,
            "scale": 0.3
          }
        }
      }]
    }],
    "style": {
      "height": 50,
      "width": 50,
      "backgroundColor": "green"
    }
  }
}

```
