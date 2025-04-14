db:
	docker-compose exec db mysql -u root -psecret employee

migrate:
	mysqldef -uroot -psecret employee < misc/migrations/employee.sql

.PHONY: db, migrate
