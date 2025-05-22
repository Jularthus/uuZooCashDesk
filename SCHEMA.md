flowchart TD

    subgraph UI["User Interface"]
      A1[On-site Cash Register UI]
      A2[Online Ticket Portal]
    end

    subgraph Application["Application Layer"]
      B1[Ticket Service]
      B2[Payment Service]
      B3[Turnstile Integration]
      B4[Reporting Service]
      B5[Tariff Manager<br/>(Strategy Pattern)]
      B6[Notification Service<br/>(Observer Pattern)]
    end

    subgraph Domain["Domain Model"]
      C1[Ticket]
      C2[Tariff (abstract)]
      C2a[ChildTariff]
      C2b[AdultTariff]
      C2c[StudentTariff]
      C3[Payment<br/>(Builder Pattern)]
      C4[TurnstileAdapter<br/>(Adapter Pattern)]
    end

    subgraph Data["Persistence Layer"]
      D1[Database]
    end

    %% UI interactions
    A1 -->|sell ticket| B1
    A2 -->|buy ticket| B1

    %% Ticket service interactions
    B1 -->|calculate price| B5
    B1 -->|create payment| B2
    B1 -->|notify sale| B6
    B1 --> C1

    %% Tariff strategies
    B5 -- uses --> C2
    C2 --> C2a
    C2 --> C2b
    C2 --> C2c

    %% Payment builder
    B2 -->|build payment| C3

    %% Turnstile integration
    B1 -->|validate ticket| B3
    B3 --> C4
    C4 -->|interact| D1

    %% Reporting
    B1 -->|send event| B4
    B4 -->|query| D1

    %% Persistence
    C1 --> D1
    C3 --> D1

    %% Observer pattern for notifications
    B1 -. notify observers .-> B6

    %% Extra notes for design patterns
    classDef pattern fill:#f6f,stroke:#333,stroke-width:2px
    B5,B6,C4,C3 class pattern
