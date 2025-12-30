export default async function Home() {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();
    return (
        <div>
            {data.todos.map((todo: any) => (
                <div key={todo.id} className="p-7 gap-3.5">
                    {todo.id}
                    {todo.todo}
                </div>
            ))}
        </div>
    );
}
