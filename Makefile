db:
	docker-compose exec db mysql -u root -psecret employee

.PHONY: db
