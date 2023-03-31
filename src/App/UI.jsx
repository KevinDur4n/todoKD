import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoContext } from "../context/TodoContext";
import { TodoButtonCreate } from "../components/TodoButtonCreate/TodoButtonCreate";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
function UI({ }) {
  const { error,
    loading,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo, deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);


  return (
    <>
      <React.Fragment>
        <div>
          <div className="m-2 md:mx-20 xl:mx-40  flex flex-col   gap-3 ">
            <div className="header rounded-lg bg-neutral-100 py-1">
              <TodoCounter />
            </div>

            <div className=" w-full  p-5  rounded-lg border overflow-hidden  bg-gray-100 h-[400px]  text-black">

              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
              <TodoList>
                <div className="text-center text-4xl">
                  {error && <p>Desesperate, hubo un error...</p>}
                  {loading && <p>Estamos cargando, no desesperes...</p>}
                  {(!loading && searchedTodos.length < 1) && <p>!Crea tu primer TODO!</p>}
                </div>
                {
                  searchedTodos.map(todo => (
                    <TodoItem key={todo.text} item={todo}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)} />)
                  )
                }
              </TodoList>




            </div>


          </div>

          {
            openModal && (
              <Modal>
                <TodoForm />
              </Modal>

            )
          }


        </div>
        <TodoButtonCreate setOpenModal={setOpenModal} openModal={openModal} />

      </React.Fragment>

    </>
  )
}

export { UI }