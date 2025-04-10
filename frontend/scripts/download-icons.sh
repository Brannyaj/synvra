#!/bin/bash

# Create tech directory if it doesn't exist
mkdir -p ../public/tech

# Define icon URLs and their corresponding filenames
declare -A icons=(
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"]="react.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"]="nextjs.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"]="typescript.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"]="tailwind.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"]="nodejs.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"]="python.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"]="java.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"]="go.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"]="aws.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"]="azure.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg"]="gcp.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"]="kubernetes.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"]="postgresql.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"]="mongodb.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"]="redis.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg"]="elasticsearch.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"]="tensorflow.svg"
  ["https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"]="pytorch.svg"
)

# Download each icon
for url in "${!icons[@]}"; do
  filename="${icons[$url]}"
  echo "Downloading $filename..."
  curl -o "../public/tech/$filename" "$url"
done

# Create placeholder SVGs for missing icons
cat > "../public/tech/openai.svg" << EOL
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 16v-4M12 8h.01"/>
</svg>
EOL

cat > "../public/tech/huggingface.svg" << EOL
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  <circle cx="8" cy="9" r="1"/>
  <circle cx="16" cy="9" r="1"/>
  <path d="M12 17c2.21 0 4-1.79 4-4H8c0 2.21 1.79 4 4 4z"/>
</svg>
EOL

echo "Done downloading icons!"
