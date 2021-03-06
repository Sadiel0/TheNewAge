"""empty message

Revision ID: 1d904d0bd826
Revises: 2807edd385a2
Create Date: 2022-01-19 14:36:26.559918

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1d904d0bd826'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('collections',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=False),
    sa.Column('attributes', sa.String(length=200), nullable=False),
    sa.Column('url', sa.String(length=200), nullable=False),
    sa.Column('owner_account', sa.String(length=200), nullable=False),
    sa.Column('contract_account', sa.String(length=200), nullable=False),
    sa.Column('fee', sa.Integer(), nullable=True),
    sa.Column('transferred', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('contract_account'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('owner_account'),
    sa.UniqueConstraint('url')
    )
    op.create_table('nfts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('description', sa.String(length=250), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('attributes', sa.Text(), nullable=True),
    sa.Column('collection_id', sa.Integer(), nullable=False),
    sa.Column('contract_id', sa.String(length=250), nullable=False),
    sa.Column('image_url', sa.String(length=200), nullable=False),
    sa.Column('position', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['collection_id'], ['collections.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('contract_id'),
    sa.UniqueConstraint('image_url'),
    sa.UniqueConstraint('name')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('nfts')
    op.drop_table('collections')
    # ### end Alembic commands ###
