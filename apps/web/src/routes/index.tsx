import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="h-screen">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.
      In suscipit corrupti ea doloremque autem delectus error optio. Iusto
      officiis porro vero neque voluptate velit autem, hic odit recusandae
      tempore repellendus ex placeat ut deserunt nihil, ullam quas alias
      consectetur suscipit eligendi illum eum ducimus. Amet repellat nam
      quaerat, quod vel tenetur nesciunt quia maiores, veniam quasi sapiente
      totam ullam. Ipsam voluptatem quasi similique temporibus nostrum ratione
      ipsa ullam repudiandae ducimus. Veniam sapiente excepturi cum tempora
      maiores provident nostrum molestias voluptate placeat suscipit itaque et
      fugit vero iste impedit necessitatibus, omnis quos vitae consequatur ipsam
      sed. Dolorem, voluptatum explicabo!
    </main>
  );
}
