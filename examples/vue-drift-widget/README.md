# Usage

This example shows how to use the drift widget in a simple Vue application.
The application loading the drift widget by default but will only enable it
through the reactive configuration once the `initialize drift` button will
be pressed.

**Note**: This example requires you to install the dependencies of the plugin.
Please run `yarn install` in the root directory of this repository.

To use this example, please create a `.env` file in the root directory of the
example and set the id of your drift widget.

**`.env`**

```bash
VITE_DRIFT_WIDGET_ID=XXXX
```

To run this example, please install the dependencies and start the Vite dev
server.

```bash
yarn install
yarn dev
```

Vite will start a development server on the default port 3000.
