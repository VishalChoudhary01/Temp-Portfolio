# Gemini Model Integration

This document outlines the integration of the Gemini model within the project.

## Key Components

The Gemini model integration involves several key components:

- `GeminiModel` class: This class provides an interface for interacting with the Gemini model, including methods for calling the model (`call`) and handling parallel requests (`call_parallel`).
- `Gemini` class: This class extends `BaseLlm` and provides the core logic for generating content using the Gemini model, supporting both streaming and non-streaming requests.
- Schema Conversion: Functions like `gemini_to_json_schema` and `_to_gemini_schema` are used to convert between Gemini Schema objects and JSON Schema dictionaries, facilitating tool use and function calling with the model.

## Usage

### Instantiating the Gemini Model

```python
def gemini_llm():
  return Gemini(model="gemini-1.5-flash")
```

### Making API Calls

The `GeminiModel` class offers methods for making calls to the Gemini API:

- `call(prompt: str, parser_func=None) -> str`: Sends a single prompt to the Gemini model.
- `call_parallel(prompts: List[str], parser_func: Optional[Callable[[str], str]] = None, timeout: int = 60, max_retries: int = 5) -> List[Optional[str]]`: Sends multiple prompts in parallel.

The `Gemini` class provides `generate_content_async` for asynchronous content generation.

### API Backend

The `_api_backend` property determines whether the Vertex AI or Gemini API is used.

```python
def _api_backend(self) -> GoogleLLMVariant:
    return (
        GoogleLLMVariant.VERTEX_AI
        if self.api_client.vertexai
        else GoogleLLMVariant.GEMINI_API
    )
```

## Considerations

- **API Key and Labels:** When using the API key from Google AI Studio, labels are not supported.
- **Schema Conversion:** The `gemini_to_json_schema` function handles the conversion of Gemini Schema objects to JSON Schema, including type mapping, nullable properties, and handling of various validation keywords (e.g., `minLength`, `maxLength`, `minimum`, `maximum`, `items`, `properties`, `required`).