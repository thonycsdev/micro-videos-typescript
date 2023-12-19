export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category {
  constructor(public readonly props: CategoryProperties) {}

  //getters
  get name(): string {
    return this.props.name;
  }
  get description() {
    return this.props.description;
  }
  get is_active() {
    return this.props.is_active;
  }
  get created_at() {
    return this.props.created_at;
  }

  //setters
  // set description(description) {
  //   this.props.description = description;
  // }
  // set is_active(is_active) {
  //   this.props.is_active = is_active;
  // }
  // set created_at(created_at) {
  //   this.props.created_at = created_at;
  // }
}
