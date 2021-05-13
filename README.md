# MMM-network-signal

Display a solid wifi logo as network signal for MagicMirror<sup>2</sup>

![Signal icons: none, weak, normal, strong, loading](https://raw.githubusercontent.com/PoOwAa/MMM-network-signal/master/icons.gif)

## Dependencies

-   [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
-   [NPM Ping](https://www.npmjs.com/package/ping)

## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
2. Install dependencies `npm i`
3. Configure your `~/MagicMirror/config/config.js`:

   ```
   {
       module: "MMM-network-signal",
       position: "bottom_right",
       config: {
           // Configuration of the module goes here
       }
   }
   ```

## Configuration Options

| **Option**         | **Default**                              | **Description**                         |
| ------------------ | ---------------------------------------- | --------------------------------------- |
| `updateInterval`   | `5000`                                   | Time in ms between connection tests     |
| `maxTimeout`       | `1000`                                   | Maximum timeout in ms for every pings   |
| `animationSpeed`   | `250`                                    | Icon change animation time in ms        |
| `initialLoadDelay` | `3000`                                   | Delay in ms for first ping              |
| `server`           | `8.8.8.8`                                | Pingable server IP address              |
| `thresholds`       | `{ strong: 50, medium: 150, weak: 500 }` | Tresholds for icons (ping answer in ms) |
| `showMessage`      | `true`                                   | Shows status messages depending on how good or bad is the connection |
| `flexDirection`    | `row`                                    | Sets the direction the module is displayed; `row` displays the row in left-to-right mode (default), `row-reverse` displays the row in right-to-left mode. |
| `scale`            | `0.45`                                   | How much to scale the ping icon. Must be greater than 0. |
