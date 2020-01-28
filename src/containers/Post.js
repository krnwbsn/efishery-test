import React from "react";
import { connect } from "react-redux";
import { Button } from 'reactstrap';

function Post({ item, dispatch }) {
  return (
    <tr>
      <td>{item.komoditas}</td>
      <td>{item.area_provinsi}</td>
      <td>{item.area_kota}</td>
      <td>{item.size}</td>
      <td>{item.price}</td>
      <td><Button outline color="success"
        className="edit"
        onClick={() =>
          dispatch({ type: "EDIT_POST", id: item.id })
        }
      >
        Edit
        </Button>{' '}
        <Button outline color="danger"
          className="delete"
          onClick={() =>
            dispatch({ type: "DELETE_POST", id: item.id })
          }
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default connect()(Post);
