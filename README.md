Here’s a comprehensive README file for your Ethereum Deposit Tracker project:

---

# Ethereum Deposit Tracker
![Edit panel - New dashboard - Dashboards - Grafana - Google Chrome 10-09-2024 6 40 11 PM](https://github.com/user-attachments/assets/dae3a3d4-c532-44d3-a982-0183e1c1383a)
![Edit panel - New dashboard - Dashboards - Grafana - Google Chrome 10-09-2024 6 41 48 PM](https://github.com/user-attachments/assets/c2e5b8d3-12c2-428f-80bf-922e24047a14)
![eth-deposit-tracker-main - App - Docker Desktop 10-09-2024 6 42 34 PM](https://github.com/user-attachments/assets/7770eadc-221e-4fac-ad52-3cea10a965ff)

## Overview

The **Ethereum Deposit Tracker** is a tool designed to monitor and record ETH deposits on the Beacon Deposit Contract. The application connects to an Ethereum node using RPC methods, tracks deposits in real-time, stores the relevant deposit data, and optionally provides alerts and visualizations through Grafana and Telegram notifications.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Schema of Deposit Data](#schema-of-deposit-data)
- [Error Handling and Logging](#error-handling-and-logging)
- [Alerting and Notifications (Optional)](#alerting-and-notifications-optional)
- [Grafana Dashboard Setup](#grafana-dashboard-setup)
- [Contributing](#contributing)
- [License](#license)

## Objective

The primary goal of the Ethereum Deposit Tracker is to track and record deposits made to the Beacon Deposit Contract: **`0x00000000219ab540356cBB839Cbe05303d7705Fa`**. It can handle real-time tracking, error logging, and visualization/notification mechanisms.

## Features

- **Real-time Deposit Monitoring**: Connects to Ethereum RPC methods to monitor deposits.
- **Multi-deposit Handling**: Can handle multiple deposits made in a single transaction.
- **Error Logging and Monitoring**: Tracks and logs errors during execution.
- **Grafana Dashboard (optional)**: Visualize deposit data and system metrics.
- **Telegram Notifications (optional)**: Alerts users when new deposits are detected.

## Prerequisites

To run this project, you need to have the following installed:

- **Node.js** (v14.x or higher)
- **npm** (Node package manager)
- **Alchemy/Infura Account** for Ethereum RPC connection
- **Docker** (if using Docker for deployment)
- **MongoDB** (optional, for storage)
- **Prometheus** and **Grafana** (optional, for monitoring)
- **Telegram Bot** (optional, for notifications)

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/<your-repo>/eth-deposit-tracker.git
    cd eth-deposit-tracker
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:
   
   Create a `.env` file in the root directory with the following content:

    ```bash
    ETH_NODE_URL=<Alchemy/Infura URL>
    BEACON_CONTRACT_ADDRESS=0x00000000219ab540356cBB839Cbe05303d7705Fa
    TELEGRAM_BOT_TOKEN=<your-telegram-bot-token>  # Optional for alerts
    TELEGRAM_CHAT_ID=<your-telegram-chat-id>      # Optional for alerts
    MONGO_URI=<your-mongo-db-uri>                 # Optional for data storage
    ```

4. **Set up Docker (optional)**:

    If you wish to use Docker for deployment, create a `docker-compose.yml` file for MongoDB, Prometheus, Grafana, and the deposit tracker service.

    Run:

    ```bash
    docker-compose up -d
    ```

## Usage

1. **Start the application**:

    ```bash
    npm start
    ```

2. The application will start tracking Ethereum deposits to the Beacon Deposit Contract and log relevant details such as `blockNumber`, `timestamp`, `amount`, etc.

3. For testing, use the example transactions below to verify deposit tracking:

    - Deposit Transaction: `0x1391be19259f10e01336a383217cf35344dd7aa157e95030f46235448ef5e5d6`
    - Deposit through Contract: `0x53c98c3371014fd54275ebc90a6e42dffa2eee427915cab5f80f1e3e9c64eba4`

## Schema of Deposit Data

Here is the schema used for saving deposit details:

```json
Deposit {
    blockNumber: Integer,
    blockTimestamp: String,
    fee: String,
    hash: String,
    pubkey: String
}
```

## Error Handling and Logging

The application has built-in error handling and logging. Every RPC interaction is wrapped in try-catch blocks to handle and log any errors encountered. Logs can be found in the `/logs` directory.

You can also use external logging services like **Winston** or **Loggly** for additional log management.

## Alerting and Notifications (Optional)

If enabled, the tracker sends notifications when new deposits are detected. Telegram alerts are set up using a bot. To enable this feature:

1. **Create a Telegram Bot**: Follow [this guide](https://core.telegram.org/bots#3-how-do-i-create-a-bot) to set up a bot and get the `BOT_TOKEN` and `CHAT_ID`.

2. **Enable Alerts**: Add the `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the `.env` file.

## Grafana Dashboard Setup

1. **Install Prometheus**: Set up a Prometheus service to collect data metrics from the Ethereum Deposit Tracker.

2. **Set up Grafana**: Visualize the collected data using a Grafana dashboard.

3. **Create a Dashboard**: Import a custom dashboard or create one from scratch to track deposit data in real-time.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.
