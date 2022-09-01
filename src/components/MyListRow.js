import '../App.css';

// eslint-disable-next-line react/prop-types
export default function MyListRow({ name, developer, gameId }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>{name}</th>
            <th>{gameId}</th>
            <th>{developer}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
