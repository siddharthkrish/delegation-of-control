export default function ({params, route, redirect}) {
  if (!"signin".indexOf(params)) {
    redirect('301', 'http://localhost:3002/');
  }
}