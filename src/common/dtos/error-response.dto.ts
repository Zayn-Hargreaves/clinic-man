// common/dtos/error-response.dto.ts
export class ErrorResponseDto {
  success: false;
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}
