#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)
CLOUDFLARE_ACCOUNT_EMAIL=$(get_env CLOUDFLARE_ACCOUNT_EMAIL)
CLOUDFLARE_ACCOUNT_API_KEY=$(get_env CLOUDFLARE_ACCOUNT_API_KEY)
BACKEND_SERVICE_SUBDOMAIN=$(get_env BACKEND_SERVICE_SUBDOMAIN)
FRONTEND_SERVICE_SUBDOMAIN=$(get_env FRONTEND_SERVICE_SUBDOMAIN)
TRAEFIK_SERVICE_SUBDOMAIN=$(get_env TRAEFIK_SERVICE_SUBDOMAIN)
PORTAINER_SERVICE_SUBDOMAIN=$(get_env PORTAINER_SERVICE_SUBDOMAIN)

TRAEFIK_A=$TRAEFIK_SERVICE_SUBDOMAIN
TRAEFIK_URL=$TRAEFIK_SERVICE_SUBDOMAIN.$DOMAIN

PORTAINER_A=$PORTAINER_SERVICE_SUBDOMAIN
PORTAINER_URL=$PORTAINER_SERVICE_SUBDOMAIN.$DOMAIN

if [ -z "$BACKEND_SERVICE_SUBDOMAIN" ]
then
    BACKEND_A="@"
    BACKEND_URL=$DOMAIN
else
    BACKEND_A=$BACKEND_SERVICE_SUBDOMAIN
    BACKEND_URL=$BACKEND_SERVICE_SUBDOMAIN.$DOMAIN
fi


if [ -z "$FRONTEND_SERVICE_SUBDOMAIN" ]
then
    FRONTEND_A="@"
    FRONTEND_URL=$DOMAIN
else 
    FRONTEND_A=$FRONTEND_SERVICE_SUBDOMAIN
    FRONTEND_URL=$FRONTEND_SERVICE_SUBDOMAIN.$DOMAIN
fi

if [ "$1" == "up" ]
then
    ansible-playbook create_ssl_certificate.yaml dns_records.yaml \
        -e "DOMAIN=$DOMAIN \
            STATE=present \
            CLOUDFLARE_ACCOUNT_EMAIL=$CLOUDFLARE_ACCOUNT_EMAIL \
            CLOUDFLARE_ACCOUNT_API_KEY=$CLOUDFLARE_ACCOUNT_API_KEY \
            BACKEND_A=$BACKEND_A \
            FRONTEND_A=$FRONTEND_A \
            BACKEND_URL=$BACKEND_URL \
            FRONTEND_URL=$FRONTEND_URL \
            TRAEFIK_A=$TRAEFIK_A \
            TRAEFIK_URL=$TRAEFIK_URL \
            PORTAINER_A=$PORTAINER_A \
            PORTAINER_URL=$PORTAINER_URL" -vvvvv
else
    ansible-playbook dns_records.yaml delete_ssl_certificate.yaml \
        -e "DOMAIN=$DOMAIN \
            STATE=absent \
            CLOUDFLARE_ACCOUNT_EMAIL=$CLOUDFLARE_ACCOUNT_EMAIL \
            CLOUDFLARE_ACCOUNT_TOKEN=$CLOUDFLARE_ACCOUNT_TOKEN \
            CLOUDFLARE_ACCOUNT_API_KEY=$CLOUDFLARE_ACCOUNT_API_KEY \
            BACKEND_A=$BACKEND_A \
            FRONTEND_A=$FRONTEND_A \
            TRAEFIK_A=$TRAEFIK_A \
            TRAEFIK_URL=$TRAEFIK_URL \
            PORTAINER_A=$PORTAINER_A \
            PORTAINER_URL=$PORTAINER_URL" -vvvvv
fi