import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import usePageStyle from '../components/usePageStyle';
import inventoryCss from '../styles/inventory.css?raw';

const INVENTORY_BODY_CSS = `
body {
    font-family: 'Montserrat', Tahoma, Geneva, Verdana, sans-serif !important;
    background-color: #e5ccae !important;
    color: #3e2723 !important;
    padding: 30px;
}
`;

function Inventory() {
  useDocumentTitle('Super Beaver | Inventory');
  usePageStyle('inventory', INVENTORY_BODY_CSS + '\n' + inventoryCss);


  return (
    <main>
      <h1>Super Beaver's Dam Engineering Library</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr className="read">
            <td>Advanced Dam Engineering</td>
            <td>Frank Timber</td>
            <td>Engineering</td>
            <td><span className="status">Read</span></td>
            <td>
              <span className="rate three">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="to-read">
            <td>101 Ways to Stop a River</td>
            <td>Andy Water</td>
            <td>Tactics</td>
            <td><span className="status">To Read</span></td>
            <td>
              <span className="rate">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="in-progress">
            <td>Wood Tastes Good</td>
            <td>J.R.R. Toothington</td>
            <td>Culinary</td>
            <td><span className="status">In Progress</span></td>
            <td>
              <span className="rate">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="read">
            <td>The Daily Chew</td>
            <td>George Oaktree</td>
            <td>Periodical</td>
            <td><span className="status">Read</span></td>
            <td>
              <span className="rate two">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="read">
            <td>River Justice</td>
            <td>Stephenie Maple</td>
            <td>Autobiography</td>
            <td><span className="status">Read</span></td>
            <td>
              <span className="rate one">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Inventory;
