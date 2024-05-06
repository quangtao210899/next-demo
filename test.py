import requests
import json

url = "https://sd0mi759te.execute-api.ap-southeast-2.amazonaws.com/prod/login"
payload = {
    "username": "nguyenthienlinhptit+5@gmail.com",
    "password": "123456789a@A"
}
headers = {
    "Content-Type": "application/json"
}

# Chuyển đổi payload thành định dạng JSON
payload_json = json.dumps(payload)

# Gửi yêu cầu POST
response = requests.post(url, data=payload_json, headers=headers)

# In ra mã trạng thái và nội dung của phản hồi
print("Status Code:", response.status_code)
print("Response:", response.text)
