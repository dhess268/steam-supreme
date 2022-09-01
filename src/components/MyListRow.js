import PropTypes from 'prop-types';

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

MyListRow.propTypes = {
  name: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  gameId: PropTypes.number.isRequired,
};
