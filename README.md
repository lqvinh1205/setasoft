Bài 1: Tìm chuỗi có độ dài xuất hiện nhiều nhất trong mảng 
- Khởi tạo 1 array
- Viết function findStringLengthAppearMostArray(): Thực hiện logic ở đây
- Khởi tạo biến stringLength -> foreach array, với mỗi item sử dụng split() để tách chuỗi thành các phần tử của mảng -> .length rồi push vào stringLength -> được độ dài các phần tử tương ứng array ban đầu
-> khởi tạo stringLengthFilter -> dùng for duyệt qua stringLength -> dùng indexOf để tìm những phần tử chưa có trong stringLengthFilter thì push vào => ta được mảng không trùng lặp
-> tạo mảng count -> duyệt mảng stringLengthFilter -> khởi tạo 3 phần tử count=0 -> duyệt stringLength check nếu stringLength[j] === stringLengthFilter[i] thì count++ => ta được mảng số lần lặp của các phần tử có độ dài bằng nhau tương
-> tìm max của mảng vừa count vừa tìm đc 
-> tìm vị trí của phần tử max ( ta được phần index=1 và giá value=2)
-> 