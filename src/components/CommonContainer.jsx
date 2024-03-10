import PropTypes from "prop-types";
export function CommonContainer({ children }) {
  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              {children}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

CommonContainer.propTypes = {
  children: PropTypes.node,
};
