```mermaid
classDiagram
    class Zoo {
        +turnstiles: Turnstile[]
        +desks: Shop[]
        +website: Shop
        +getTurnstile(index): Turnstile
        +getEnterTurnstile(index): Turnstile
        +getExitTurnstile(index): Turnstile
        +getDesk(index): Shop
        +addTurnstile(type): void
    }

    class CommandOrder {
        +execute(): void
        +undo(): void
        +redo(): void
        -history: CommandOrder[]
        -stack: CommandOrder[]
        -order: Order
        -price: int
        +getPrice(): int
    }

    class AdultConcreteCommand {
        -price: int
        -quantity: int
        +execute(): void
        +undo(): void
        +getPrice(): int
    }

    class StudentConcreteCommand {
        -price: int
        -quantity: int
        +execute(): void
        +undo(): void
        +getPrice(): int
    }

    class ChildConcreteCommand {
        -price: int
        -quantity: int
        +execute(): void
        +undo(): void
        +getPrice(): int
    }

    class PaymentFactory {
        +paymentType: string
        +constructor(paymentType): PaymentBuilder
    }

    class CardPaymentBuilder {
        +id: int
        +ccv: int
        +expiration: string
        +beneficiary: string
        +setId(id): void
        +setCcv(ccv): void
        +setExpiration(expiration): void
        +setBeneficiary(beneficiary): void
        +pay(price): void
    }

    class CashPaymentBuilder {
        +isDesk: boolean
        +pay(price): void
    }

    class BitcoinPaymentBuilder {
        +address: string
        +setAddress(address): void
        +pay(price): void
    }

    class Ticket {
        +save(): void
        +print(): void
        +notify(): void
        +useTicket(): void
        +type: string
        +id: string
        +isUsed: boolean
    }

    class GetTickets {
        -order: Order
        +buildTickets(): Ticket[]
        +buildOnlineTickets(): Ticket[]
        -makeId(): string
    }

    class DatabaseSingleton {
        +tickets: Ticket[]
        +peopleOnSite: int
        +reset(): void
        +checkTicket(ticket): boolean
        +addPeopleOnSite(): void
        +removePeopleOnSite(): void
    }

    class Shop {
        +isDesk: boolean
        +orderCommand: CommandOrder
        +reduction: Reduction
        +paymentEngine: PaymentBuilder
        +paymentDone: boolean
        +getTickets(): Ticket[]
        +setPaymentType(): void
        +execPayment(): void
        +createReduction(): void
    }

    class Turnstile {
        +isOut: boolean
        +handlers: Function[]
        +enter(ticket): boolean
        +exit(): void
        +subscribe(fn): void
        +unsubscribe(fn): void
    }

    class Reduction {
        +reduction: int
        +applyReduction(price): int
    }

    class ViewSingleton {
        +info(): void
    }

    %% Inheritance and implementation
    CommandOrder <|-- AdultConcreteCommand
    CommandOrder <|-- StudentConcreteCommand
    CommandOrder <|-- ChildConcreteCommand

    PaymentFactory <|.. CardPaymentBuilder
    PaymentFactory <|.. CashPaymentBuilder
    PaymentFactory <|.. BitcoinPaymentBuilder

    %% Composition/Association
    Shop o-- CommandOrder
    Shop o-- PaymentFactory
    Shop o-- Reduction

    Zoo o-- Shop
    Zoo o-- Turnstile

    DatabaseSingleton <.. Turnstile
    DatabaseSingleton <.. ViewSingleton
    DatabaseSingleton <.. Ticket : Observer

    Ticket <-- GetTickets
'''