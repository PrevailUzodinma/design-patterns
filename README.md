# Telephone Package with Observer Design Pattern

This codebase demonstrates the implementation of the Observer Pattern to structure a telephone package. The Observer Pattern is utilized to establish a communication mechanism between the Telephone subject and various observer objects.

## Components:

### 1. Subject Interface (`Subject`):

The `Subject` class serves as the blueprint for objects that can be observed. It includes methods to add, remove, and notify observers.

### 2. Observer Interface (`Observer`):

The `Observer` class defines the interface for objects that will observe the subject. It includes an `update` method that is called by the subject to notify observers.

### 3. Telephone Subject (`Telephone`):

The `Telephone` class extends the `Subject` class and represents the subject being observed. It includes methods to manage phone numbers, dial a number, and notify observers when a valid number is dialed.

### 4. Observer Implementations:

- `PrintNumber`: An observer that prints the dialed phone number.
- `PrintNowDialingNumber`: An observer that prints a message indicating that the phone number is being dialed.

## Usage:

1. **Creating a Telephone object:**

    ```javascript
    const telephone = new Telephone();
    ```

2. **Adding and Removing Phone Numbers:**

    ```javascript
    telephone.addPhoneNumber("09034567890");
    telephone.addPhoneNumber("08037594848");
    telephone.addPhoneNumber("08037409079");
    
    telephone.removePhoneNumber("09034567890");
    ```

3. **Adding Observers to Telephone:**

    ```javascript
    const printNumberObserver = new PrintNumber();
    const printNowDialingObserver = new PrintNowDialingNumber();
    
    telephone.addObserver(printNumberObserver);
    telephone.addObserver(printNowDialingObserver);
    ```

4. **Dialing Phone Numbers:**

    ```javascript
    // Dial a phone number (present in Telephone)
    telephone.dialPhoneNumber("08037594848");
    
    // Dial a phone number (not present in Telephone)
    telephone.dialPhoneNumber("09034567890");
    ```

## Observations:

- When a phone number is dialed, the registered observers are notified.
- If the dialed number is not in the Telephone's list, an error message is displayed.

Feel free to expand and customize the codebase according to your specific requirements.
