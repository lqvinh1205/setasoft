Bài 1: Tìm chuỗi có độ dài xuất hiện nhiều nhất trong mảng 
- Khởi tạo 1 array
- Viết function findStringLengthAppearMostArray(): Thực hiện logic ở đây
- Khởi tạo biến stringLength -> foreach array, với mỗi item sử dụng split() để tách chuỗi thành các phần tử của mảng -> .length rồi push vào stringLength -> được độ dài các phần tử tương ứng array ban đầu
-> khởi tạo stringLengthFilter -> dùng for duyệt qua stringLength -> dùng indexOf để tìm những phần tử chưa có trong stringLengthFilter thì push vào => ta được mảng không trùng lặp
-> tạo mảng count -> duyệt mảng stringLengthFilter -> khởi tạo 3 phần tử count[0]=0, count[1]=0 ... -> duyệt stringLength check nếu stringLength[j] === stringLengthFilter[i] thì count[i]++ => ta được mảng số lần lặp của các phần tử có độ dài bằng nhau
-> tìm max của mảng vừa count vừa tìm đc 
-> tìm vị trí của phần tử max ( ta được phần index=1 )
-> duyệt lại array, check nếu phần tử có độ dài bằng 2  thì push vào mảng arrResult
 
Bài 2: tìm tổng 2 số lớn nhất
- cho 1 mảng các số
- tạo 1 biến  let sumTwoNumber = 0
-> dùng sort() sắp xếp mảng từ lớn đến bé
-> dùng slice cắt 2 phần tử tính từ phần tử 0
-> dùng for duyệt mảng có 2 phần tử vừa cắt được -> tính tổng -> lưu vào biến sumTwoNumber

Bài 3: Show post + add post

tạo models export interface của post
tạo file slice import vào store
trong file slice tạo 1 slice với createSlice có giá trị khởi tạo là rỗng
-> tạo createAsynthunk -> dùng axios call API 
-> dùng extraReducer lưu state.value = action.payload

ở pages List post: sử dụng useAppSelect để select đến state.product.value
dispath để thực thi function getAllProducts()
-> hiện thị các post

ở page Add post: 
lấy được data từ form -> dispath action createProduct() -> thành công thì thêm vào state.product.value -> chuyển trang về trang list
