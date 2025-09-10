export class MetaDto {
  total: number;
  page: number;
  limit: number;
}

export class PaginatedResponseDto<T> {
  data: T[];
  meta: MetaDto;
}

export class SuccessResponseDto<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}
