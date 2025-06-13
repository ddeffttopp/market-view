export interface EnvironmentInterface {
  id: string;
  name: string;
  values: PostmanEnvironmentValue[];
  _postman_variable_scope: string;
  _postman_exported_at: string;
  _postman_exported_using: string;
}

export interface PostmanEnvironmentValue {
  key: string;
  value: string;
  type: string;
  enabled: boolean;
}
