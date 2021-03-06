"""empty message

Revision ID: e67b1e69280e
Revises: 6f0eb50823ee
Create Date: 2022-01-05 03:24:23.908118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e67b1e69280e'
down_revision = '6f0eb50823ee'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
