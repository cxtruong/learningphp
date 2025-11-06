module.exports = async function (context, req) {
  const principal = JSON.parse(Buffer.from(req.headers['x-ms-client-principal'], 'base64').toString('utf8'));
  if (!principal.userRoles.includes('admin')) {
    context.res = { status: 403, body: "Không có quyền truy cập danh sách người dùng" };
    return;
  }

  // Dữ liệu giả lập
  const users = [
    { email: "giaovienA@example.com", fullname: "GV A", subject: "Toán" },
    { email: "giaovienB@example.com", fullname: "GV B", subject: "Anh" }
  ];

  context.res = { status: 200, body: users };
};
