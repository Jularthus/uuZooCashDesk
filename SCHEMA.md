```mermaid
flowchart TD

    %% Singleton Pattern
    DB[DatabaseSingleton]
    DB_note[Singleton Pattern]
    DB -.-> DB_note

    %% Strategy Pattern
    TicketService[TicketService]
    TariffStrategy[TariffStrategy]
    ChildTariff[ChildTariff]
    AdultTariff[AdultTariff]
    StudentTariff[StudentTariff]
    TariffStrategy_note[Strategy Pattern]
    TariffStrategy -.-> TariffStrategy_note

    TicketService --> TariffStrategy
    TariffStrategy --> ChildTariff
    TariffStrategy --> AdultTariff
    TariffStrategy --> StudentTariff

    %% Observer Pattern
    NotificationService[NotificationService]
    TicketSale[TicketSale]
    NotificationService_note[Observer Pattern]
    NotificationService -.-> NotificationService_note

    TicketService -- notifies --> NotificationService
    TicketService -- triggers --> TicketSale
    TicketSale -- notifies --> NotificationService

    %% Adapter Pattern
    TurnstileIntegration[TurnstileIntegration]
    TurnstileAdapter[TurnstileAdapter]
    LegacyTurnstileAPI[LegacyTurnstileAPI]
    TurnstileAdapter_note[Adapter Pattern]
    TurnstileAdapter -.-> TurnstileAdapter_note

    TicketService --> TurnstileIntegration
    TurnstileIntegration --> TurnstileAdapter
    TurnstileAdapter --> LegacyTurnstileAPI

    %% Decorator Pattern
    Ticket[Ticket]
    TicketDecorator[TicketDecorator]
    VIPDecorator[VIPDecorator]
    GuidedTourDecorator[GuidedTourDecorator]
    InsuranceDecorator[InsuranceDecorator]
    TicketDecorator_note[Decorator Pattern]
    TicketDecorator -.-> TicketDecorator_note

    TicketService --> Ticket
    Ticket --> TicketDecorator
    TicketDecorator --> VIPDecorator
    TicketDecorator --> GuidedTourDecorator
    TicketDecorator --> InsuranceDecorator

    %% Main flow
    UI[User Interface]
    UI --> TicketService
    TicketService --> DB
'''