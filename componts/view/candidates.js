export function Candidates() {
  const candidates = `<head>
  <title>Employee Management</title>
</head>

<body>
  <h1>Employees</h1>

  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th colspan="2">Actions</th>
    </tr>

    <tr>
      <td>Luis</td>
      <td>Luis@gmail</td>
      <td><button>View</button></td>
      <td><button>Delete</button></td>
    </tr>
  </table>
</body>`;

return candidates
}