module.exports = async function (context, req) {
  const user = req.headers['x-ms-client-principal'];
  if (!user) {
    context.res = { status: 401 };
    return;
  }

  const principal = JSON.parse(Buffer.from(user, 'base64').toString('utf8'));
  const email = principal.userDetails;

  // Dữ liệu giả lập
  const data = {
    email,
    fullname: "Người dùng mới",
    subject: "Chưa cập nhật"
  };

  context.res = { status: 200, body: data };
};
