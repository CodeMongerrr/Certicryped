from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from hashlib import sha256

# Function to generate a hashed key based on a token ID
def generate_key(token_id):
    # Hash the token_id using SHA-256
    hashed_token_id = sha256(str(token_id).encode()).digest()
    return hashed_token_id

# Function to encrypt data using AES encryption
def encrypt(token_id, data):
    # Generate a key based on the token_id
    key = generate_key(token_id)

    # Generate a random initialization vector (IV)
    iv = get_random_bytes(16)

    # Create an AES cipher object with the generated key and AES.MODE_CBC mode
    cipher = AES.new(key, AES.MODE_CBC, iv)

    # Pad the data to be a multiple of 16 bytes (AES block size)
    padded_data = data + (16 - len(data) % 16) * chr(16 - len(data) % 16)

    # Encrypt the data
    ciphertext = cipher.encrypt(padded_data.encode())

    # Combine IV and ciphertext
    encrypted_data = iv + ciphertext

    return encrypted_data

# Function to decrypt data using AES decryption
def decrypt(token_id, encrypted_data):
    # Generate a key based on the token_id
    key = generate_key(token_id)

    # Extract IV from the encrypted data
    iv = encrypted_data[:16]

    # Create an AES cipher object with the key and AES.MODE_CBC mode
    cipher = AES.new(key, AES.MODE_CBC, iv)

    # Decrypt the data
    decrypted_data = cipher.decrypt(encrypted_data[16:])

    # Remove padding
    unpadded_data = decrypted_data[:-ord(decrypted_data[-1:])].decode()

    return unpadded_data

# Example usage:
token_id = 1
data_to_encrypt = "Hello, this is a secret message."

# Encrypt the data
encrypted_data = encrypt(1, data_to_encrypt)

# Decrypt the data
decrypted_data = decrypt(1, encrypted_data)

print(f"Original data: {data_to_encrypt}")
print(f"Encrypted data: {encrypted_data}")
print(f"Decrypted data: {decrypted_data}")