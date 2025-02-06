# Number Classification API

A simple API that classifies numbers based on various mathematical properties with interesting facts.

## Installation

To run the API locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/devprinceng/hng12-backend-task2-number-classifier-api.git
cd number-classification-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` file and fill it with the following

```bash
PORT=3001
```

### 4. Run the Application

```bash
npm run dev
```

The server will start on `http://localhost:3001`.

## API Usage

### Query Parameters

- **`number`**: A valid integer to be classified.

### Response

- **`number`**: The number passed in the request.
- **`is_prime`**: Boolean indicating if the number is prime.
- **`is_perfect`**: Boolean indicating if the number is a perfect number.
- **`properties`**: Array of properties such as:
  - **"armstrong"**: If the number is an Armstrong number.
  - **"odd"**: If the number is odd.
  - **"even"**: If the number is even.
- **`digit_sum`**: Sum of all digits in the number.
- **`fun_fact`**: Fun fact about the number (fetched from the Numbers API).

## Error Handling

- **400 Bad Request**: If the `number` query parameter is missing or invalid (not a valid integer), the API returns a `400` error with a detailed message.
- **500 Internal Server Error**: If there's an issue with the fun fact service or other internal server errors.

## Example Usage

### Valid Request

```bash
curl http://localhost:3000/api/classify-number?number=371
```

#### Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Invalid Request

```bash
curl http://localhost:3000/api/classify-number?number=ghgt
```

#### Response

```json
{
  "number": "ghgt",
  "error": true
}
```

## Test Cases

Test the API with these valid numbers to verify all functionality:

### Armstrong Numbers

```bash
curl http://localhost:3000/api/classify-number?number=371
```

#### Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11
}
```

```bash
curl http://localhost:3000/api/classify-number?number=153
```

#### Response

```json
{
  "number": 153,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 9
}
```

```bash
curl http://localhost:3000/api/classify-number?number=8208
```

#### Response

```json
{
  "number": 8208,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "even"],
  "digit_sum": 18
}
```

### Perfect Numbers

```bash
curl http://localhost:3000/api/classify-number?number=28
```

#### Response

```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10
}
```

```bash
curl http://localhost:3000/api/classify-number?number=496
```

#### Response

```json
{
  "number": 496,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 19
}
```

### Prime Numbers

```bash
curl http://localhost:3000/api/classify-number?number=17
```

#### Response

```json
{
  "number": 17,
  "is_prime": true,
  "is_perfect": false,
  "properties": ["odd"],
  "digit_sum": 8
}
```

```bash
curl http://localhost:3000/api/classify-number?number=23
```

#### Response

```json
{
  "number": 23,
  "is_prime": true,
  "is_perfect": false,
  "properties": ["odd"],
  "digit_sum": 5
}
```

### Basic Numbers

```bash
curl http://localhost:3000/api/classify-number?number=100
```

#### Response

```json
{
  "number": 100,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["even"],
  "digit_sum": 1
}
```

```bash
curl http://localhost:3000/api/classify-number?number=15
```

#### Response

```json
{
  "number": 15,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["odd"],
  "digit_sum": 6
}
```

```bash
curl http://localhost:3000/api/classify-number?number=42
```

#### Response

```json
{
  "number": 42,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["even"],
  "digit_sum": 6
}
```
