# MMM-network-signal

Display a solid wifi logo as network signal

## Dependencies

-   [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        {
            module: "MMM-network-signal",
            position: "bottom_right",
        },
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
| `tresholds`        | `{ strong: 50, medium: 150, weak: 500 }` | Tresholds for icons (ping answer in ms) |
