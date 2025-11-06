module.exports = async function (context, req) {
  const principal = JSON.parse(Buffer.from(req.headers['x-ms-client-principal'], 'base64').toString('utf8'));
  const role = principal.userRoles.includes('admin') ? 'admin' : 'user';
  const body = req.body;

  if (role !== 'admin' && body.email !== principal.userDetails) {
    context.res = { status: 403, body: "Không có quyền sửa người khác" };
    return;
  }

  // Ở đây bạn có thể lưu thông tin vào Azure Table Storage hoặc JSON file
  context.res = { status: 200, body: { message: "Đã lưu dữ liệu", saved: body } };
};
