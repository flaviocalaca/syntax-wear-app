import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container">
      <h1 className='text-black'>Products</h1>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore porro maxime omnis minima nobis iure praesentium, mollitia repellendus possimus quisquam. Sed officia dolor voluptate aut quisquam a deleniti optio.</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore porro maxime omnis minima nobis iure praesentium, mollitia repellendus possimus quisquam. Sed officia dolor voluptate aut quisquam a deleniti optio.</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore porro maxime omnis minima nobis iure praesentium, mollitia repellendus possimus quisquam. Sed officia dolor voluptate aut quisquam a deleniti optio.</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore porro maxime omnis minima nobis iure praesentium, mollitia repellendus possimus quisquam. Sed officia dolor voluptate aut quisquam a deleniti optio.</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore porro maxime omnis minima nobis iure praesentium, mollitia repellendus possimus quisquam. Sed officia dolor voluptate aut quisquam a deleniti optio.</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore porro maxime omnis minima nobis iure praesentium, mollitia repellendus possimus quisquam. Sed officia dolor voluptate aut quisquam a deleniti optio.</p>
    </div>
  );
}
