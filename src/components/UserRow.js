export const UserRow = ({ user }) => {
  return (
    <tr>
      <th>{user.id}</th>
      <th>{user.email}</th>
      <th>
        {user.first_name} {user.last_name}
      </th>
      <th>
        <img
          src={user.avatar}
          style={{
            width: 50,
          }}
        />
      </th>
    </tr>
  );
}