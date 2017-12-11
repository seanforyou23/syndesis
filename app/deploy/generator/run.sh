#!/bin/bash
set -euo pipefail

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
targetdir=${TARGET_DIR:-${dir}/..}

mkdir -p ${targetdir}

MESSAGE=$(cat <<'EOF'
#
# Do not edit, this is a generated file.  To regenerate,  run: ./generator/run.sh
#
EOF
)

go get -u github.com/spf13/cobra github.com/spf13/pflag github.com/hoisie/mustache github.com/imdario/mergo

cd $dir

echo "$MESSAGE" > ${targetdir}/syndesis.yml
go run syndesis-template.go $* --name=syndesis >> ${targetdir}/syndesis.yml

echo "$MESSAGE" > ${targetdir}/syndesis-dev.yml
go run syndesis-template.go $* --name=syndesis-dev --with-docker-images --allow-localhost --debug >> ${targetdir}/syndesis-dev.yml

echo "$MESSAGE" > ${targetdir}/syndesis-restricted.yml
go run syndesis-template.go $* --name=syndesis-restricted --restricted >> ${targetdir}/syndesis-restricted.yml

echo "$MESSAGE" > ${targetdir}/syndesis-ephemeral-restricted.yml
go run syndesis-template.go $* --name=syndesis-ephemeral-restricted --ephemeral --restricted >> ${targetdir}/syndesis-ephemeral-restricted.yml

echo "$MESSAGE" > ${targetdir}/syndesis-dev-restricted.yml
go run syndesis-template.go $* --name=syndesis-dev-restricted --restricted --with-docker-images --allow-localhost --debug >> ${targetdir}/syndesis-dev-restricted.yml

echo "$MESSAGE" > ${targetdir}/syndesis-ci.yml
go run syndesis-template.go $* --name=syndesis-ci --probeless >> ${targetdir}/syndesis-ci.yml
