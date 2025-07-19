export function Vacancies() {
  const vacancies = `<head>
  <title>Employee Management</title>
</head>

<body>
  <h1>Employees</h1>

  <div class="top">

      <input type="text" placeholder="Search" class="search-field">
      <input type="submit" value="Search" class="search-btn">

    <button class="add-emp-btn">+ Add Employee</button>
  </div>

  <table>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Requirements</th>
      <th>Salary</th>
      <th colspan="2">Actions</th>
    </tr>

    <tr>
      <td>Operation</td>
      <td>.....</td>
      <td>......</td>
      <td>1000000</td>
      <td><button>View</button></td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
    </tr>
  </table>
</body>`;

return vacancies
}
