import Counter from "../components/Counter";

export default async function pages() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <div>
      <Counter user={data} />
      <h1>Inside Cabin pages</h1>
      {data.map((user) => (
        <ul>
          <li>{user.name}</li>
        </ul>
      ))}
    </div>
  );
}
