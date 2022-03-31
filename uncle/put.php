<?php 
//article
$xmldata = file_get_contents("php://input");
$aa = get_object_vars(json_decode($xmldata));
$aId = $aa['aId'];
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    header("HTTP/1.0 405 Method Not Allowed");
exit(); }
//页面输出
echo "您要更改的文章点赞状态的iD是".$aId;
?>