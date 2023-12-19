import { Category, CategoryProperties } from "./category";

describe("Category Tests", () => {
  test("Category Construtor", () => {
    const props: CategoryProperties = {
      name: "Category Test",
      created_at: new Date(),
      description: "Category Test Description",
      is_active: true,
    };

    const category = new Category(props);
    expect(category.props).toStrictEqual(props);
  });
});
