import { useState } from "react";
import { UserRow } from "../components/UserRow";
import { useUsers } from "../hooks/useUsers";

function UsersPage() {
  const { users } = useUsers();

  // 1ero - State para controlar la paginacion
  const [currentPage, setCurrentPage] = useState(0);

  // 2do - para cortar los elementos, en este caso, seran 2 users de 5
  const filterUsers = () => {
    // la idea con currentPage + 2 es que sume de 2 en 2. [0 + 2 = 4; 4 + 2 = 6; y asi sucesivamente]
    return users.slice(currentPage, currentPage + 2);
  };

  // 5to - Funciones para controlar la paginacion.
  const nextPage = () => {
    setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    // Esto es una validacion para comprobar que como minimo hay un elemento anterior.
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  return (
    <div>
      <h1>UsersPage</h1>
      <div className="p-5">
        {/* 4to - crear los Botones para controlar la paginacion */}
        <div className="m-3">
          <button onClick={prevPage} className="btn btn-primary">
            Prev
          </button>
          <button onClick={nextPage} className="btn btn-primary">
            Next
          </button>
        </div>

        <table className="table border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {/*  3era - sustituir la users por la funcion filterUsers, la cual returna los users */}
            {filterUsers().map((user, i) => (
              <UserRow user={user} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersPage;
